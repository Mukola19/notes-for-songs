import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { AppDropdown } from "../../commons/AppDropdown/AppDropdown";
import { Header } from "../../commons/Header/Header";
import { Song } from "../../component/Song/Song";
import st from "./Song.page.module.scss";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteSong,
  getOneSong,
  updateSong,
} from "../../store/reducers/songsReducer";
import { useAuth } from "../../hooks/useAuth";
import { AppButton } from "../../commons/Elements/AppButton/AppButton";
import { AppDropdownItem } from "../../commons/AppDropdown/AppDropdownItem";
import { Election } from "../../component/Song/Election";

export const SongPage = () => {
  const [fontSize, setFontSize] = useState(16);
  const { id } = useParams();
  const { push } = useHistory();
  const song = useSelector((state) => state.songs.song);
  const { loading } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSong(id));
  }, []);


  return (
    <>
      <Header>
        <div className={st.buttons}>
          <AppButton
            onClick={() => setFontSize(fontSize + 2)}
          >
            +
          </AppButton>
          <AppButton
            onClick={() => setFontSize(fontSize - 2)}
          >
            -
          </AppButton>
 
          <Election id={id} />
        </div>
      </Header>

      <Song {...song} fontSize={fontSize} loading={loading} />
    </>
  );
};
