import styled from "styled-components";

export const SvgUpload = () => {
    return (
        <DownloadSvg data-v-abfb9cc5="" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24"
                   stroke="#fff">
            <path data-v-abfb9cc5="" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
            </path>
        </DownloadSvg>
    )
}

const DownloadSvg = styled("svg")`
  width: 120px;
  height: 120px;
  animation: hithere 5s infinite;

  @keyframes hithere {
    30% {
      transform: scale(1.2);
    }
    40%, 60% {
      transform: rotate(-20deg) scale(1.2);
    }
    50% {
      transform: rotate(20deg) scale(1.2);
    }
    70% {
      transform: rotate(0deg) scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`
