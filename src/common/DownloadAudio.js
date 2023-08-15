import React from "react";
import { Button } from "@mui/material";

function DownloadAudioButton({ url, trackName }) {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", trackName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <Button
      onClick={() => downloadFileAtURL(url)} // Use the passed URL
      sx={{
        marginLeft: "1%",
        whiteSpace: "nowrap",
        textAlign: "center", // Center the text horizontally
      }}
    >
      Download '{trackName}'
    </Button>
  );
}

export default DownloadAudioButton;
