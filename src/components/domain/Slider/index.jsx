import { useEffect, useRef, useState, useMemo } from 'react'
import { cardList } from '@api'
import { isXL, breakpoints, BREAKPOINT_XL } from '@style/MediaQuery'
import { ReactComponent as IconRightArrow } from '@assets/icons/icon-rightArrow.svg'
import { ReactComponent as IconLeftArrow } from '@assets/icons/icon-leftArrow.svg'
import { SliderItem } from '@components/domain'
import { Tag } from '@components/base'
import {
  Slider_PD_BASE,
  Slider_WIDTH_XL,
  Slider_TIMEOUT,
} from '@utils/constants'
import { deepCloneObject } from '@utils/functions'
import * as Style from './style'

const Slider = () => {
  const countClone = 2
  const firstCloneIndex = -1
  const lastCloneIndex = cardList.length
  const originLength = cardList.length // 11 (0 ~ 11)

  const sliderRef = useRef(null)
  const nextArrowRef = useRef(null)
  const prevArrowRef = useRef(null)
  const currendIndexRef = useRef(0)
  const draggedXRef = useRef(
    -innerWidth * countClone + Slider_PD_BASE * countClone * 2,
  )
  const centerPotitionXLRef = useRef(
    (innerWidth - breakpoints[BREAKPOINT_XL]) / 2,
  )
  const [isTransition, setIsTransition] = useState(false)
  const [allowMove, setAllowMove] = useState(false)

  const getClonedCardList = (cardList) => {
    const firstCloneList = deepCloneObject(cardList[0])
    const secondCloneList = deepCloneObject(cardList[1])
    const lastCloneList = deepCloneObject(cardList[originLength - 1])
    const lastBeforeCloneList = deepCloneObject(cardList[originLength - 2])
    const clonedCardList = [
      lastBeforeCloneList,
      lastCloneList,
      ...cardList,
      firstCloneList,
      secondCloneList,
    ]
    clonedCardList[0].index = firstCloneIndex - 1
    clonedCardList[1].index = firstCloneIndex
    clonedCardList[clonedCardList.length - 2].index = lastCloneIndex
    clonedCardList[clonedCardList.length - 1].index = lastCloneIndex + 1
    return clonedCardList
  }

  const clonedCardList = useMemo(() => getClonedCardList(cardList), [cardList])
  const cloneLength = clonedCardList.length
  const [totalWidth, setTotalWidth] = useState(cloneLength * innerWidth)

  const setTransition = (value) => {
    sliderRef.current.style = `transform:
    translate3d(${value}px, 0, 0)`
  }

  const checkSameIndex = (curIndex, index) => {
    return (
      curIndex === index ||
      curIndex - lastCloneIndex === index ||
      curIndex + lastCloneIndex === index
    )
  }

  useEffect(() => {
    // 초기화
    if (isXL(innerWidth)) {
      setTransition(-Slider_WIDTH_XL * countClone + centerPotitionXLRef.current)
      draggedXRef.current =
        -Slider_WIDTH_XL * countClone + centerPotitionXLRef.current
    } else {
      setTransition(draggedXRef.current)
    }
  }, [])

  useEffect(() => {
    let initialX = 0,
      differentX = 0,
      scrolledValue = 0,
      threshold = 120,
      resizeWidth = isXL(innerWidth)
        ? Slider_WIDTH_XL
        : innerWidth - Slider_PD_BASE * 2 // 초기값

    const handleResize = () => {
      // resize 이벤트마다 재계산된 innerWidth값 반영
      setTotalWidth(cloneLength * innerWidth)
      centerPotitionXLRef.current =
        (innerWidth - breakpoints[BREAKPOINT_XL]) / 2

      if (isXL(innerWidth)) {
        setTransition(-Slider_WIDTH_XL * 2 + centerPotitionXLRef.current)
        draggedXRef.current = -Slider_WIDTH_XL * 2 + centerPotitionXLRef.current
        resizeWidth = Slider_WIDTH_XL
      } else {
        setTransition(
          (currendIndexRef.current + countClone) *
            -(innerWidth - Slider_PD_BASE * 2),
        )
        draggedXRef.current =
          (currendIndexRef.current + countClone) *
          -(innerWidth - Slider_PD_BASE * 2)
        resizeWidth = innerWidth - Slider_PD_BASE * 2
      }
    }

    const initialDrag = (e) => {
      initialX = e.touches ? e.touches[0].clientX : e.clientX
    }

    const mouseMove = (e) => {
      if (e.button === 0) {
        // 왼쪽 마우스 클릭일 떄만
        initialDrag(e)
        sliderRef.current.addEventListener('mousemove', dragMove)
      }
    }

    const dragMove = (e) => {
      if (initialX) {
        const currentX = e.touches ? e.touches[0].clientX : e.clientX

        differentX = initialX - currentX
        scrolledValue = draggedXRef.current - differentX
        setTransition(scrolledValue)
      }
    }

    const clickMoveRight = () => {
      clickMove('right')
    }
    const clickMoveLeft = () => {
      clickMove('left')
    }

    const temporaryTransition = (time) => {
      setIsTransition(true)
      setTimeout(() => {
        setIsTransition(false)
        setClonePosition(currendIndexRef.current)
      }, time)
    }

    const clickMove = (direction) => {
      switch (direction) {
        case 'right':
          shiftSlide('right')
          break
        case 'left':
          shiftSlide('left')
          break
        default:
          shiftSlide('none')
      }

      temporaryTransition(Slider_TIMEOUT)
    }

    const autoMove = () => {
      shiftSlide('right')

      temporaryTransition(Slider_TIMEOUT)
    }

    const dragEnd = (e) => {
      if (-differentX <= -threshold) {
        shiftSlide('right')
      } else if (-differentX >= threshold) {
        shiftSlide('left')
      } else {
        shiftSlide('none')
      }

      temporaryTransition(Slider_TIMEOUT)
      sliderRef.current.removeEventListener('touchmove', dragMove)
      sliderRef.current.removeEventListener('mousemove', dragMove)
    }

    const shiftSlide = (direction) => {
      switch (direction) {
        case 'right':
          console.log(resizeWidth, 'width')
          setTransition(draggedXRef.current - resizeWidth)
          draggedXRef.current -= resizeWidth
          currendIndexRef.current++
          break
        case 'left':
          setTransition(draggedXRef.current + resizeWidth)
          draggedXRef.current += resizeWidth
          currendIndexRef.current--
          break
        default:
          setTransition(draggedXRef.current)
          setAllowMove(true)
          setTimeout(() => {
            setAllowMove(false)
          }, 100)
      }
    }

    const setClonePosition = (index) => {
      switch (index) {
        case firstCloneIndex:
          const transitionToLastSM = (-lastCloneIndex - 1) * resizeWidth
          const transitionToLastXL =
            Slider_WIDTH_XL * (-lastCloneIndex - 1) +
            centerPotitionXLRef.current
          setTransition(
            isXL(innerWidth) ? transitionToLastXL : transitionToLastSM,
          )
          draggedXRef.current = isXL(innerWidth)
            ? transitionToLastXL
            : transitionToLastSM
          currendIndexRef.current = originLength - 1
          break
        case lastCloneIndex:
          const transitionToFirstSM =
            -innerWidth * countClone + Slider_PD_BASE * countClone * 2
          const transitionToFirstXL =
            -Slider_WIDTH_XL * countClone + centerPotitionXLRef.current
          setTransition(
            isXL(innerWidth) ? transitionToFirstXL : transitionToFirstSM,
          )
          draggedXRef.current = isXL(innerWidth)
            ? transitionToFirstXL
            : transitionToFirstSM
          currendIndexRef.current = 0
          break
        default:
        // console.log(currendIndexRef.current)
      }
    }

    const intervalId = setInterval(() => {
      autoMove()
    }, 3000)

    window.addEventListener('resize', handleResize)
    sliderRef.current.addEventListener('touchstart', initialDrag)
    sliderRef.current.addEventListener('touchmove', dragMove)
    sliderRef.current.addEventListener('mousedown', mouseMove)
    sliderRef.current.addEventListener('touchend', dragEnd)
    sliderRef.current.addEventListener('mouseup', dragEnd)

    nextArrowRef.current.addEventListener('click', clickMoveRight)
    prevArrowRef.current.addEventListener('click', clickMoveLeft)
    // }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('touchstart', initialDrag)
        sliderRef.current.removeEventListener('touchmove', dragMove)
        sliderRef.current.removeEventListener('mousedown', mouseMove)
        sliderRef.current.removeEventListener('touchend', dragEnd)
        sliderRef.current.removeEventListener('mouseup', dragEnd)
      }

      nextArrowRef.current.removeEventListener('click', clickMoveRight)
      prevArrowRef.current.removeEventListener('click', clickMoveLeft)
      window.removeEventListener('resize', handleResize)
      clearInterval(intervalId)
    }
  })

  return (
    <Style.SliderWrapper>
      <Style.SliderContainer>
        <Style.SliderList>
          <Tag
            ref={nextArrowRef}
            className="topBanner nextArrow"
            label="슬라이드 오른쪽 이동"
          >
            <IconRightArrow />
          </Tag>
          <Tag
            ref={prevArrowRef}
            className="topBanner prevArrow"
            label="슬라이드 왼쪽 이동"
          >
            <IconLeftArrow />
          </Tag>
          <Style.SliderTrack
            ref={sliderRef}
            isTransition={isTransition}
            width={totalWidth}
          >
            {clonedCardList.map(
              ({ index, src, srcMD, title, content, link }) => (
                <SliderItem
                  key={index}
                  isCurrent={checkSameIndex(currendIndexRef.current, index)}
                  index={index}
                  src={src}
                  srcMD={srcMD}
                  title={title}
                  content={content}
                  link={link}
                  allowMove={allowMove}
                />
              ),
            )}
          </Style.SliderTrack>
        </Style.SliderList>
      </Style.SliderContainer>
    </Style.SliderWrapper>
  )
}

export default Slider
