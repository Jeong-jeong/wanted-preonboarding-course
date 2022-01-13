import { useEffect, useRef, useState } from 'react'
import { cardList } from '@api'
import { SliderItem } from '@components/domain'
import * as Style from './style'

const Slider = () => {
  const sliderRef = useRef(null)
  const currendIndexRef = useRef(0)
  const draggedX = useRef(40)
  const [clickedIndex, setClickedIndex] = useState(currendIndexRef.current)

  const getIndex = (e) => {
    const clickedIndex = e.target?.closest('li')?.dataset.index
    clickedIndex && setClickedIndex(+clickedIndex)
  }

  useEffect(() => {
    let initialX = 0,
      differentX = 0,
      // draggedX = sliderRef.current.offsetLeft,
      scrolledValue = 0

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
        console.log(draggedX.current, differentX, 'scrolledValue')
        sliderRef.current.style = `transform:
          translate3d(${scrolledValue}px, 0, 0)`
      }
    }

    const dragEnd = (e) => {
      draggedX.current = scrolledValue
    }

    sliderRef.current.addEventListener('click', getIndex, true)
    sliderRef.current.addEventListener('touchstart', initialDrag)
    sliderRef.current.addEventListener('touchmove', dragMove)
    sliderRef.current.addEventListener('mousedown', mouseMove)
    window.addEventListener('mouseup', () => {
      draggedX.current = scrolledValue
      sliderRef.current.removeEventListener('mousemove', dragMove)
    })
    sliderRef.current.addEventListener('touchend', dragEnd)
    // sliderRef.current.addEventListener('touchend', dragEnd)
    // sliderRef.current.addEventListener('click', slideClick)

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('click', getIndex)
        sliderRef.current.removeEventListener('touchstart', initialDrag)
        sliderRef.current.removeEventListener('touchmove', dragMove)
        sliderRef.current.removeEventListener('mousedown', mouseMove)
        window.removeEventListener('mouseup', () => {
          sliderRef.current.removeEventListener('mousemove', dragMove)
        })
      }
    }
  })

  return (
    <Style.SliderWrapper>
      <Style.SliderContainer>
        <Style.SliderList>
          <Style.SliderTrack ref={sliderRef} onClick={getIndex}>
            {cardList.map(({ index, src, srcXL, title, content, link }) => (
              <SliderItem
                key={index}
                isCurrent={true}
                index={index}
                src={src}
                srcXL={srcXL}
                title={title}
                content={content}
                link={link}
              />
            ))}
          </Style.SliderTrack>
        </Style.SliderList>
      </Style.SliderContainer>
    </Style.SliderWrapper>
  )
}

export default Slider
