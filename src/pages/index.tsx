import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { counterState } from "@/recoilState";
import { styled } from "styled-components";

const IndexPage = () => {
  const [count, setCount] = useRecoilState(counterState);
  const increment = () => {
    setCount(count + 1);
    console.log("ioncer");
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>
        asssssssssssss
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <Link href="/test">
        <button>test Pages 이동</button>
      </Link>
    </div>
  );
};

export default IndexPage;
