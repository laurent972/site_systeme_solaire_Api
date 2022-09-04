import { createContext } from "react";
interface ImgContextState {
    useImg: any ,
    setUseImg:any
  }
export const ImgContext = createContext({} as ImgContextState);
