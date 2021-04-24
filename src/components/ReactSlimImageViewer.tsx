import { useState, useEffect, CSSProperties, useCallback } from "react";
import "./ReactSlimImageViewer.css";

export interface RsivStyles {
  wrapper: CSSProperties;
  content: CSSProperties;
  slide: CSSProperties;
  image: CSSProperties;
  close: CSSProperties;
  navigation: CSSProperties;
  prev: CSSProperties;
  next: CSSProperties;
}

interface Props {
  src: string[];
  onClose: () => void;
  currentIndex?: number;
  styles?: Partial<RsivStyles>;
  baseClassName?: string;
}

export const ReactSlimImageViewer: React.FC<Props> = ({
  src,
  currentIndex,
  styles,
  onClose,
  baseClassName = "react-slim-image-viewer",
}) => {
  const [curIndex, setCurIndex] = useState(currentIndex || 0);

  const changeImage = useCallback(
    (direction: "prev" | "next") => {
      let nextIndex = curIndex + (direction === "prev" ? -1 : 1);

      if (nextIndex > src.length - 1) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = src.length - 1;
      }

      setCurIndex(nextIndex);
    },
    [curIndex, src.length]
  );

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (["ArrowLeft", "h"].includes(event.key)) {
        changeImage("prev");
      }

      if (["ArrowRight", "l"].includes(event.key)) {
        changeImage("next");
      }
    };

    const handleWheel = (event: any) => {
      if (event.wheelDeltaY > 0) {
        changeImage("prev");
      } else {
        changeImage("next");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [changeImage, onClose]);

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
      className={`${baseClassName}__wrapper`}
      style={styles?.wrapper}
    >
      <span
        onClick={onClose}
        className={`${baseClassName}__close`}
        style={styles?.close}
      >
        &times;
      </span>

      {src.length > 1 && (
        <span
          onClick={() => changeImage("prev")}
          className={`${baseClassName}__navigation ${baseClassName}__prev`}
          style={styles?.prev}
        >
          &#10094;
        </span>
      )}

      {src.length > 1 && (
        <span
          onClick={() => changeImage("next")}
          className={`${baseClassName}__navigation ${baseClassName}__next`}
          style={styles?.next}
        >
          &#10095;
        </span>
      )}

      <div
        className={`${baseClassName}__content`}
        style={styles?.content}
      >
        <div
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose?.();
            }
          }}
          className={`${baseClassName}__slide`}
          style={styles?.slide}
        >
          <img
            src={src[curIndex]} alt=""
            className={`${baseClassName}__image`}
            style={styles?.image}
          />
        </div>
      </div>
    </div>
  );
};
