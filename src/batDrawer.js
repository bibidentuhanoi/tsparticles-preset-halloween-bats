const batSheet = new Image();
batSheet.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAABQCAYAAACTb8w2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAIbklEQVR42mL8//8/w2ABAAHEgk9STk6OhZGRcS+QWfTw4cOzlFgENIsDSE0BmncRaNZkbGoAAogJnwFAjX+BVAQQzwMaZkauQ+Tl5dmAZs0D4sdA7gJc6gACCK9jgD74D8TPgUxOoEFbgYbqkOEQZmBS6AUyA4H4GdC8z7jUAgQQE5Fm2gHxd6Che4EhpEuCQ5iAeiYCPZIG5NYD2cvwqQcIIKIcA/TNCyD1BWioGBDvICGEJgBxCtARbED6xaNHj77iUwwQQEwkhDjjs2fPGJ48eSL18+fP7UAH4Q0hRUXFyS9evEh7+vQp+5cvXxiYmJhYCVkAEECkOIbh379/YPz69WuZX79+bVFQUNDH4ZCpQIenAtWwg9T//fuXKPMBAogkxwCjCO6oV69eyT1//pwZaPF8YDqyhjpiobi4uM3jx4/FQA4hNbEDBBApjmFDLiBBDgLyvwOjTfXHjx/LlJSUzgIdF/f+/XsmoNwXdM1AtcyELAAIIJAiorCsrKwBMzOzhaCg4GMgDXLVf0lJyYssLCxuwPRwEkiDxBJERUW72djYXoHkubm5/wPZzXx8fBbAKBUjZAdAABHtGBgGRoW+hITEQ5CDQBgYdSeAFoMtB+LjQLH3QDGwQ4CJvAkYbXzEmg0QQCQ7BoSBlpgAQ+MG1AFYMS8vb6OysjI/KeYCBBBZjoGmnUv4HAPE/qSaCRBATBTUfblAHABMD4+AoQQWAIYGAzDtdIDEgfg0qQYCBBDZIQPDwFxkIyws/ACI/wPZ7aSkEXQMEECM1GjPABO1A5CSBuIt9+/f/0iuOQABxDiYGlcAAcTEMIgAQAANKscABNCgcgxAAA0qxwAE0KByDEAADSrHAATQoHIMQAANKscABBBKcQxsc7AAq35eUDWDjllZWXmB8uxotTcrsJXHCWIDaUYgnxu9iJeSksJqHrCZwQtsI/EgqwUIICakHh+omVgMVPQQ1CGA4gdAfA+Gv3//Ph3YWOIGFv+g1j7Dnz9/PIGtui1QR3gB27rbYeYBG1ncHBwchkCxe8hmwMyG2nMRqFcSpgcggOCuAjomG4jfAfF/Li4uXM2C38Ba+RkwhBYCfcwCbEi5Afk/gPxnIiIib4C191FoA8wI6JhnQPWvgWIY5oAaX8BW4n9gyPwB2ncR5gaAAEJ2jCAQA81VkAE2C2SAmkC4EpujgFH2W1paehHQIh4gPw5kIdCCC6DKEhjNxsCW4CtsjgDip6B6FahWBmgXCAPdI6sAcwNAABFqQCWB2t5oGOa730D6NjQqQWKgDtp1UBcW5HOoGLree/jsAwggvLU20FB+ICWGLAaMQndgupn84cMHnPqA0ccAjLabwO6ML5r5IA88/I/DUoAAYiGQ00BtE5T2CTB6Hn369Alk2BQ8+m4AHewBTNwPScnZAAFEVosM6HPQWIseOzt7FjB9gaME1FMAhsZVYGjqAfnK5JgLEEAs5JRNwCz9A9QgBybUG8DsywDEU4EJ9iowCgOAXd875JZ5AAFEcUsP2O4FFYSGwCj5+PDhw+uUmAUQQIOq2QkQQIOqbgIIoEHlGIAAGlSOAQigQeUYgAAaVI4BCKBB5RiAABpUjgEIoEHlGIAAotgxwDaJOrC1xgUdhFYD8nnINQsggKgRMpuBWAPKXgOsKC3JNQgggFgodQnQctAkhSowVEBzAnzQhhVZACCAmKjgmAu/f/9e8OvXr5tA9j9gjf6UXLMAAoikihLoewmgheDQfPToEbgNAmwPswB7ADuBtbYakB0IdMxZUEsO2LYBD6tBR9WfA9UTHCYHCCCiHQNqqAND4AiQCXIQ2/PnzxmBlvwC8kGWsENDGdTOAQ2jswoICDABG+e/geb/Aza8koHtnRUPHjzA6yCAACKqBQbMIVLA5uZ9pBb/JyB+h2ekEzRC/g7WMOfn5/8BDNUoYE+AGZ89AAGEN2SAjhAFGsgNjIbDwJCQAQU51BE2QPwEiEFThspYtIZCRzuXALEvKLSAIfUX6KgUoBmgjt5HYLT9QNcEEECEBp8vyMjIPASGyFdoaLwFYl2krgwfEAuhYyR5HmjWB+n9KiQk9BwY3Q+AngzAZh9AABHK2h7QdPUHGvwgTW+QPPKJQBIATZhFQdMUiA+yDzQ79x6beoAAGlTNToAAGlR1E0AADSrHAATQoHIMQAANKscABNCgcgxAAA0qxwAE0KByDEAAUaOl5wMsqUWhbC9QPUauWQABRI2QmQFqXUDZoHUPxuQaBBBA1GjpgaoKN2CdA5r8As3C/SLXLIAAotgxQMvX/PjxowFYs7NycnIeBLZdHpJrFkAAURxNLCws8969e3cPiBmAja/FQMfcJtcsgACiyDHKysoG37592w0MHXUQ//v373OA7ExRUVE2cswDCCBy57QNgG0cC2Fh4afo473Adi9onBg0zWwBxAKkmAsQQOQ4BNTGfYDkgOtAB/2Gro8ArQL4iSTnSYrZAAHEREZIgiz5CZ1Yvw0asge2BpcAy5dLPDw8XkCx2aAcBl3e8p0UswECiOSQkZSUVAE65KGUlNRdDg4OJRwN+IVAR37h4uJKUVRU5CHWbIAAIskh4uLizEDHPAC1+tnZ2dUJROduUPoBOtqbWPMBAoikcubFixd/QQ4BRQEwGzPizaZMTKyfP39mAOLfxJoPEEAkpRkxMTEZoCWcwKz7EtiP+oNPLbCP9AyYq/4Co1IaunqRIAAIIJJCBpgGjgBLWZAHbIH4LoG0GA+MViZg2gHVXa+BeAsh8wECiCjHAGtlUC9CBhg9oJGGgIcPH94kpAeo5jcwROKBnTZBUECBxnCAYt/w6QEIIGKjCdTvAa0+jAIaeIHYkAT2GkFlDmgtjSvQM96E1AME0KDqNwEEGAALw34lWmd1AQAAAABJRU5ErkJggg==";
let spriteHeight = 20;
let spriteWidth = 35;
let totalFrames = 4;
let currentFrame = 0;
let srcY = 0;
let framesDrawn = 0;
// setInterval(() => {
//   currentFrame++;
//   if (currentFrame > 100) currentFrame = 0;
// }, 156);
export const batDrawer = (context, particle, radius, opacity) => {
  currentFrame = currentFrame % totalFrames;
  srcY = currentFrame * spriteHeight;

  context.lineWidth = 0.027325;
  context.moveTo(2.967445, 9.945384);
  context.scale(radius / 2, radius / 2);
  context.drawImage(
    batSheet,
    0,
    srcY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  framesDrawn++;
  if (framesDrawn >= 30) {
    currentFrame++;
    framesDrawn = 0;
  }
  context.fill();
};
