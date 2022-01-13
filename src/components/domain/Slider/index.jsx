import { useEffect, useRef, useState, useMemo } from 'react'
import { cardList } from '@api'
import { SliderItem } from '@components/domain'
import { Slider_PD_BASE } from '@utils/constants'
import { deepCloneObject } from '@utils/functions'
import * as Style from './style'

// 맨 앞과 맨 뒤를 붙임
// draggedX를 0번 인덱스에서 시작
// 버튼을 누르거나 shiftSlide 때마다 currentIndex 변화
// 인덱스가 마지막이거나 맨 앞이면, translate3d값 바꾸기

const Slider = () => {
  const sliderRef = useRef(null)
  const currendIndexRef = useRef(0)
  const draggedX = useRef(-window.innerWidth * 2 + Slider_PD_BASE * 4)
  const [isTransition, setIsTransition] = useState(false)
  const [clickedIndex, setClickedIndex] = useState(currendIndexRef.current)
  const firstCloneIndex = -1
  const lastCloneIndex = cardList.length

  const getIndex = (e) => {
    const clickedIndex = e.target?.closest('li')?.dataset.index
    clickedIndex && setClickedIndex(+clickedIndex)
  }

  const getClonedCardList = (cardList) => {
    const firstCloneList = deepCloneObject(cardList[0])
    const secondCloneList = deepCloneObject(cardList[1])
    const lastCloneList = deepCloneObject(cardList[cardList.length - 1])
    const lastBeforeCloneList = deepCloneObject(cardList[cardList.length - 2])
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

  const setTransition = (value) => {
    sliderRef.current.style = `transform:
    translate3d(${value}px, 0, 0)`
  }

  useEffect(() => {
    setTransition(-window.innerWidth * 2 + Slider_PD_BASE * 4)
  }, [])

  useEffect(() => {
    let initialX = 0,
      differentX = 0,
      scrolledValue = 0,
      threshold = 120,
      resizeWidth = window.innerWidth - Slider_PD_BASE * 2

    const handleResize = () => {
      resizeWidth = window.innerWidth - Slider_PD_BASE * 2
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
        scrolledValue = draggedX.current - differentX
        setTransition(scrolledValue)
      }
    }

    const dragEnd = (e) => {
      // - 붙였을 때 음수면 오른쪽 이동
      // - 붙였을 때 양수면 왼쪽 이동
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
      }, 400)
      sliderRef.current.removeEventListener('mousemove', dragMove)
    }

    const shiftSlide = (direction) => {
      switch (direction) {
        case 'right':
          setTransition(draggedX.current - resizeWidth)
          draggedX.current -= resizeWidth
          currendIndexRef.current++
          checkCloneIndex()
          break
        case 'left':
          setTransition(draggedX.current + resizeWidth)
          draggedX.current += resizeWidth
          currendIndexRef.current--
          checkCloneIndex()
          break
        default:
          setTransition(draggedX.current)
      }
    }

    const checkCloneIndex = () => {
      switch (currendIndexRef.current) {
        case firstCloneIndex:
          console.log(firstCloneIndex)
          setTransition((-lastCloneIndex - 1) * resizeWidth)
          currendIndexRef.current = -lastCloneIndex - 1
          break
        case lastCloneIndex:
          setTransition(-window.innerWidth * 2 + Slider_PD_BASE * 4)
          break
        default:
          console.log(currendIndexRef.current)
      }
    }

    window.addEventListener('resize', handleResize)
    sliderRef.current.addEventListener('click', getIndex, true)
    sliderRef.current.addEventListener('touchstart', initialDrag)
    sliderRef.current.addEventListener('touchmove', dragMove)
    sliderRef.current.addEventListener('mousedown', mouseMove)
    sliderRef.current.addEventListener('touchend', dragEnd)
    window.addEventListener('mouseup', dragEnd)
    // sliderRef.current.addEventListener('click', slideClick)

    return () => {
      if (sliderRef.current) {
        window.removeEventListener('resize', handleResize)
        sliderRef.current.removeEventListener('click', getIndex)
        sliderRef.current.removeEventListener('touchstart', initialDrag)
        sliderRef.current.removeEventListener('touchmove', dragMove)
        sliderRef.current.removeEventListener('mousedown', mouseMove)
        sliderRef.current.removeEventListener('touchend', dragEnd)
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
            onClick={getIndex}
          >
            {clonedCardList.map(
              ({ index, src, srcXL, title, content, link }) => (
                <SliderItem
                  key={index}
                  isCurrent={currendIndexRef.current === index}
                  index={index}
                  src={src}
                  srcXL={srcXL}
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
