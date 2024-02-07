import { useEffect, useRef } from "react";

import { type InstructionsType } from "@/components/search-form";

type CursorProps = {
  query: string;
  cursorRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  formRef: React.RefObject<HTMLFormElement>;
  setInstructions: React.Dispatch<React.SetStateAction<InstructionsType>>;
};

export default function Cursor({
  query,
  cursorRef,
  inputRef,
  buttonRef,
  formRef,
  setInstructions,
}: CursorProps) {
  const animationTimes = {
    FromInitialToInput: 1000,
    FromInputToButton: 1500,
    typingSpeed: query.length > 10 ? 100 : 200,
  };

  useEffect(() => {
    const input = inputRef.current;
    const button = buttonRef.current;
    const form = formRef.current;
    const cursor = cursorRef.current;

    if (!input || !button || !form || !cursor) return;

    const INITIAL_CURSOR_POSITION = {
      left: "10px",
      top: "10px",
    };

    const INPUT_POSITION = {
      left: `${input.offsetLeft}px`,
      top: `${input.offsetTop}px`,
    };

    const BUTTON_POSITION = {
      left: `${button.offsetLeft}px`,
      top: `${button.offsetTop}px`,
    };

    const cursorAnimation = () => {
      setInstructions({
        heading: "Step One:",
        content: "Type a search query in the search box.",
      });

      cursor.style.display = "block";
      cursor.style.transition = `all ${animationTimes.FromInitialToInput}ms ease`;
      cursor.style.left = INITIAL_CURSOR_POSITION.left;
      cursor.style.top = INITIAL_CURSOR_POSITION.top;
      setTimeout(() => {
        cursor.style.transition = "all 0.5s ease";
        cursor.style.left = INPUT_POSITION.left;
        cursor.style.top = INPUT_POSITION.top;

        input?.focus();
        input.value = "";
        let i = 0;
        function typeQuery() {
          if (i < query.length) {
            input!.value += query[i];
            i++;
            setTimeout(typeQuery, animationTimes.typingSpeed);
          }
        }

        setTimeout(() => {
          typeQuery();
        }, animationTimes.FromInitialToInput);

        const typingTime =
          query.length * animationTimes.typingSpeed +
          animationTimes.FromInitialToInput;

        setTimeout(async () => {
          setInstructions({
            heading: "Step Two:",
            content: "Click the Google Search button.",
          });
          cursor.style.transition = `all ${animationTimes.FromInputToButton}ms ease`;
          cursor.style.left = `${button?.offsetLeft}px`;
          cursor.style.top = `${button?.offsetTop}px`;
          setTimeout(() => {
            button?.click();
            setInstructions({
              heading: "Come on",
              content: "Was That So Hard?",
            });
          }, animationTimes.FromInputToButton);
        }, typingTime);
      }, animationTimes.FromInitialToInput);
    };
    cursorAnimation();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor hidden absolute pointer-events-none z-50 transition-transform duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 28 28"
        xmlSpace="preserve"
        width={42}
        height={42}
      >
        <path
          fill="#FFF"
          d="M8.2 20.9L8.2 4.9 19.8 16.5 13 16.5 12.6 16.6z"
        ></path>
        <path fill="#FFF" d="M17.3 21.6L13.7 23.1 9 12 12.7 10.5z"></path>
        <path
          d="M12.5 13.6H14.5V21.6H12.5z"
          transform="rotate(-22.773 13.483 17.596)"
        ></path>
        <path d="M9.2 7.3L9.2 18.5 12.2 15.6 12.6 15.5 17.4 15.5z"></path>
      </svg>
    </div>
  );
}
