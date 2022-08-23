export default function (xInit, yInit, xEnd, yEnd) {
    return gameData.x > xInit && gameData.y > yInit &&
        gameData.x < xEnd && gameData.y < yEnd;
}