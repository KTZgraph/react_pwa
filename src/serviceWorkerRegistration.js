import { Workbox } from "workbox-window";

export default function registerServiceWorker() {
  // do funckji, żeby można ją było łatwo wykesportowac do index.js
  if ("production" !== process.env.NODE_ENV) {
    return;
  }

  if ("serviceWorker" in navigator) {
    // sciezka w folderze  dist
    const wb = new Workbox("sw.js");
    // do aktualziacji aplikacji - popup do usera żeby zatwierdził wyczyszczenie cache i aktualziacji aplikacji

    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        // FIXME confirm - NIE używać na produkcji
        if (confirm("New app update is available, Click Ok to refresh")) {
          // window.location.reload(); aktualzuje aplikację i relouduje cache
          window.location.reload();
        }
      }
    });

    wb.register();
  }
}
