import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";


function Gsaptest() {
    const app = useRef();
    const circle = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // use scoped selectors
            gsap.to(".box", { rotation: -90, repeat: -1 });
            // or refs
            gsap.to(circle.current, { rotation: 90, repeat: -1 });

        }, app);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={app} className="Gino">
            <div className="box">selector</div>
            <div className="circle" ref={circle}>Ref</div>
        </div>
    );
}
export default Gsaptest
