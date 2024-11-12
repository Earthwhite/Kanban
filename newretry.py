import cv2 as cv
import numpy as np


mainlmg = cv.imread('img/mario.png', cv.IMREAD_ANYCOLOR)
temp_img = cv.imread('img/coin.png', cv.IMREAD_ANYCOLOR)


result = cv.matchTemplate(mainlmg, temp_img, cv.TM_CCOEFF_NORMED)


threshold = 0.9
locations = np.where(result >= threshold)



rects = []
confidences = []
for pt in zip(*locations[::-1]):  
    topleft = pt
    dely = temp_img.shape[0]
    delx = temp_img.shape[1]
    bottomright = (topleft[0] + delx, topleft[1] + dely)

    
    rects.append([topleft[0], topleft[1], delx, dely])
    confidences.append(1.0)  

rects = np.array(rects)


indices = cv.dnn.NMSBoxes(rects.tolist(), confidences, score_threshold=threshold, nms_threshold=0.3)


print(f"Coin: {len(indices)}")  


for i in indices:
    x, y, w, h = rects[i]
   
    cv.rectangle(mainlmg, (x, y), (x + w, y + h), color=(255, 215, 196), thickness=1, lineType=cv.LINE_4)

  
    fontsize = 1
    font = cv.FONT_ITALIC
    position = (x + 3, y + 3)
    color = (255, 215, 196)
    cv.putText(mainlmg, "coin", position, font, fontsize, color, thickness=2)


cv.imshow("result", mainlmg)
cv.waitKey()
cv.destroyAllWindows()