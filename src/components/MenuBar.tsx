import React from "react";

export const MenuBar: React.FC<{updateView: (ref: string) => void;}> = ({updateView}) => {
    const buttons = [
        {ref: "map", label: "Map"},
        {ref: "hero", label: "Heroes"},
    ]

    return (
        <div className={`flex py-2 justify-center content-center`}>
            {buttons.map(button =>
                <button
                    onClick={() => updateView(button.ref)}
                    className={`rounded py-2 px-4 mx-2 bg-blue-200`}>
                    {button.label}
                </button>)
            }
        </div>
    )
}