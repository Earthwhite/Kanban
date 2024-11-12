import cv2 as cv
import numpy as np


mainlmg = cv.imread('img/mario.png', cv.IMREAD_ANYCOLOR)
temp_img = cv.imread('img/coin.png', cv.IMREAD_ANYCOLOR)


result = cv.matchTemplate(mainlmg, temp_img, cv.TM_CCOEFF_NORMED)


threshold = 0.98


locations = np.where(result >= threshold)
coi = len(locations[0])

print(f"Number Coin: {coi}")

for pt in zip(*locations[::-1]):
    topleft = pt
    dely = temp_img.shape[0]
    delx = temp_img.shape[1]
    bottomright = (topleft[0] + delx, topleft[1] + dely)

    cv.rectangle(mainlmg, topleft, bottomright, color=(255, 215, 196), thickness=1, lineType=cv.LINE_4)

    fontsize = 1
    font = cv.FONT_ITALIC
    posittion = (topleft[0] + 3, topleft[1] + 3)
    color = (255, 215, 196)
    cv.putText(mainlmg, "coin", posittion, font, fontsize, color, thickness=2)


cv.imshow("result", mainlmg)
cv.waitKey()
cv.destroyAllWindows()
