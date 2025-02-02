export default function GradientText({
    children,
    className = "",
    colors = ["#3f9c6d", "#2fa8a4", "#926cf3"],
    animationSpeed = 8,
    showBorder = false,
    }) {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
    };
    
    return (
      <div
        className={`relative mx-auto max-w-fit  rounded-[1.25rem] font-bold  transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      >
        {showBorder && (
          <div
            className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
            style={{
              ...gradientStyle,
              backgroundSize: "300% 100%",
            }}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        )}
        <div
          className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
          style={{
            ...gradientStyle,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "300% 100%",
          }}
        >
          {children}
        </div>
      </div>
    );
    }