export default function(f, delay){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {f.apply(this, args);}, delay);
  };
}
