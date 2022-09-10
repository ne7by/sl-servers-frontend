import React from "react";

const ServerTech = (
    {
        techList
    }
) => {
    return (
        <div className="server-tech">
            {techList.map((tech, index) => (
                <div key={index}>
                    {index > 0 && <span className="server-tech-divider">|</span>}
                    <span className="server-tech-name">{tech.name}:</span>
                    <span className="server-tech-version">{tech.version}</span>
                </div>
            ))}
        </div>
    )
}

export default ServerTech;