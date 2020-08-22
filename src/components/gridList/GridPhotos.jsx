import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import BMG from "../shop/BMG.js";
import toy from "../shop/toy.js";
import toyBags from "../shop/toyBags.js";
import canvasBags from "../shop/canvasBags.js";
import keyrings from "../shop/keyrings.js";
import purse from "../shop/purse.js";
import sale from "../shop/sale.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function GridPhotos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Boomerang</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {BMG.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>Toy</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {toy.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>Toy Bags</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {toyBags.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>Canvas Bags</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {canvasBags.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>Keyrings</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {keyrings.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>Purses</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {purse.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <h1>SALE</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {sale.map((tile) => (
          <GridListTile key={tile.imageUrl}>
            <img src={tile.imageUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
