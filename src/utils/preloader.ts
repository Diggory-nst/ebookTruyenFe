'use strict'

import { useEffect } from "react"

type CanvasRef = React.MutableRefObject<HTMLCanvasElement | null>
type DivRef = React.MutableRefObject<HTMLDivElement | null>

const preloader = (canvas_ref: CanvasRef, grid_ref: DivRef | null = null) => {

    useEffect(() => {

        const canvas_tag = canvas_ref.current
        const grid_tag = grid_ref?.current

        if (!canvas_tag) return
        if (grid_tag) {
            const width = grid_tag.offsetWidth

            if (width != canvas_tag.width) {
                canvas_tag.width = width
            }
        }

        const ctx = canvas_tag.getContext('2d')
        if (!ctx) return

        ctx.lineWidth = 2
        ctx.strokeStyle = "red"

        let start1: number = 0, end1: number = 1.4
        let start2: number = 0.3, end2: number = 1.7

        const x: number = canvas_tag.width / 2
        const y: number = canvas_tag.height / 2

        let nextTime: number = 0;
        const duration: number = 100;

        const circleAnimate = (currentTime: number) => {

            if (currentTime < nextTime) {
                requestAnimationFrame(circleAnimate)
                return
            }

            nextTime = currentTime + duration

            start1 -= 0.1
            end1 -= 0.1
            start2 += 0.1
            end2 += 0.1

            if (start1 == (-2.0000000000000004)) {
                start1 = 0
                end1 = 1.4
                start2 = 0.3
                end2 = 1.7
            }

            ctx.clearRect(0, 0, canvas_tag.width, canvas_tag.height);

            ctx.beginPath();
            ctx.arc(x, y, 30, start1 * Math.PI, end1 * Math.PI)
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath();
            ctx.arc(x, y, 20, start2 * Math.PI, end2 * Math.PI)
            ctx.stroke()
            ctx.closePath()

            requestAnimationFrame(circleAnimate);
        }

        requestAnimationFrame(circleAnimate)
    }, [])
}

export default preloader