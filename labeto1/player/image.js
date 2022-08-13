export default function Image({ src, readyImage }) {
  loadImage(src, image => readyImage(image));
}