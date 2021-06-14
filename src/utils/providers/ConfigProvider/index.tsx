import React, { useState, useEffect } from "react";
import { ImageConfig } from "../../../utils/interfaces";

const defaultState = {
  change_keys: [""],
  images: {
    base_url: "",
    secure_base_url: "",
    backdrop_sizes: [""],
    logo_sizes: [""],
    poster_sizes: [""],
    profile_sizes: [""],
    stiller_sizes: [""]
  }
};

export const ConfigContext = React.createContext(defaultState);

interface Props {
  children?: React.ReactElement;
}

const ConfigProvider = (props: Props) => {
  const [configData, setConfigData] = useState<ImageConfig>(defaultState);

  const getImageConfiguration = () => {
    fetch("http://localhost:8000/api/v1/imageConfiguration")
      .then((response) => response.json())
      .then((res: any) => {
        setConfigData(res);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getImageConfiguration();
  }, []);

  return (
    <ConfigContext.Provider value={configData}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
