(ns site.core
  (:require [goog.dom :as gdom]))

(defn ^:dev/after-load init []
  (set! (.-innerHTML (gdom/getElement "app"))
        "<h1>Takuzen Toh</h1>
         <h3><a href=\"https://vdctokyo.org\" target=\"_blank\" rel=\"noopener noreferrer\">VisionDevCamp Tokyo 2025</a></h3>
         <p>A Vision Pro Hackathon</p>"))

