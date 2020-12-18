import { AnyAction } from "redux";
import { TileNotation } from "../../types";

const selectTile = (input: {tile: TileNotation} ): AnyAction => ({
  type: 'setSelectedTile',
  payload: {
    tile: input.tile
  }
})