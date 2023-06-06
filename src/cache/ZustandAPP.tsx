import useStore from './Index';

export default function RegisterView() {

    const num = useStore((state) => state.num) //定义的状态
    const add = useStore((state) => state.addnum) //定义的方法
    const subtract = useStore((state) => state.subtractnum) //定义的方法


    return (
        <div>
            <div>RegisterView</div>
            <div>{num}</div>
            <button onClick={() => {
                add()
            }}>subtract
            </button>
            <button onClick={() => {
                subtract()
            }}>subtract
            </button>
        </div>

    )
}
