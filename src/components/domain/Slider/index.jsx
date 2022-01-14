import { useEffect, useRef, useState, useMemo } from 'react'
import { cardList } from '@api'
import { isXL, breakpoints, BREAKPOINT_XL } from '@style/MediaQuery'
import { SliderItem } from '@components/domain'
import { Slider_PD_BASE, Slider_PD_XL, Slider_WIDTH_XL } from '@utils/constants'
import { deepCloneObject } from '@utils/functions'
import * as Style from './style'

const Slider = () => {
  const countClone = 2
  const firstCloneIndex = -1
  const lastCloneIndex = cardList.length
  const originLength = cardList.length // 11 (0 ~ 11)

  const sliderRef = useRef(null)
  const currendIndexRef = useRef(0)
  const draggedXRef = useRef(
    -innerWidth * countClone + Slider_PD_BASE * countClone * 2,
  )
  const [isTransition, setIsTransition] = useState(false)

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
    if (isXL(innerWidth)) {
      setTransition(
        -Slider_WIDTH_XL * 2 + (innerWidth - breakpoints[BREAKPOINT_XL]) / 2,
      )
      draggedXRef.current =
        -Slider_WIDTH_XL * 2 + (innerWidth - breakpoints[BREAKPOINT_XL]) / 2
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
      // window.innerWidth는 실시간 변경되는 값이므로 변수에 담을 수 없음
      if (isXL(innerWidth)) {
        setTransition(
          -Slider_WIDTH_XL * 2 + (innerWidth - breakpoints[BREAKPOINT_XL]) / 2,
        )
        draggedXRef.current =
          -Slider_WIDTH_XL * 2 + (innerWidth - breakpoints[BREAKPOINT_XL]) / 2
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
        setTotalWidth(cloneLength * innerWidth) // FIXME:계속 재선언됨
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

    const dragEnd = (e) => {
      if (-differentX <= -threshold) {
        shiftSlide('right')
      } else if (-differentX >= threshold) {
        shiftSlide('left')
      } else {
        shiftSlide('none')
      }

      setIsTransition(true)
      setTimeout(() => {
        setIsTransition(false)
        setClonePosition(currendIndexRef.current)
      }, 400)
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
      }
    }

    const setClonePosition = (index) => {
      switch (index) {
        case firstCloneIndex:
          setTransition((-lastCloneIndex - 1) * resizeWidth)
          draggedXRef.current = (-lastCloneIndex - 1) * resizeWidth
          currendIndexRef.current = originLength - 1
          break
        case lastCloneIndex:
          console.log('last clone')
          setTransition(
            -innerWidth * countClone + Slider_PD_BASE * countClone * 2,
          )
          draggedXRef.current =
            -innerWidth * countClone + Slider_PD_BASE * countClone * 2
          currendIndexRef.current = 0
          break
        default:
          console.log(currendIndexRef.current)
      }
    }

    window.addEventListener('resize', handleResize)
    sliderRef.current.addEventListener('touchstart', initialDrag)
    sliderRef.current.addEventListener('touchmove', dragMove)
    sliderRef.current.addEventListener('mousedown', mouseMove)
    window.addEventListener('touchend', dragEnd)
    window.addEventListener('mouseup', dragEnd)
    // sliderRef.current.addEventListener('click', slideClick)

    return () => {
      if (sliderRef.current) {
        window.removeEventListener('resize', handleResize)
        sliderRef.current.removeEventListener('touchstart', initialDrag)
        sliderRef.current.removeEventListener('touchmove', dragMove)
        sliderRef.current.removeEventListener('mousedown', mouseMove)
        window.removeEventListener('touchend', dragEnd)
        window.removeEventListener('mouseup', dragEnd)
      }
    }
  })

  return (
    <Style.SliderWrapper>
      <Style.SliderContainer>
        <Style.SliderList>
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
