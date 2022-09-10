export default function (xInit, yInit, xEnd, yEnd) {
    return data.click.x > xInit &&
        data.click.y > yInit &&
        data.click.x < xEnd &&
        data.click.y < yEnd;
}