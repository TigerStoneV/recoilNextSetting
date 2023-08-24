import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { counterState } from "@/recoilState";
import { Page } from "@/styles/default";

const TestPage = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <div>
        <div>
          <p>Count: {count}</p>
        </div>
      </div>
      <Link href="/">
        <button>Index Pages 이동</button>
      </Link>
    </div>
  );
};

export default TestPage;
