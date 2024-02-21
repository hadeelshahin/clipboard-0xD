/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function() {

eval("/* eslint-disable quotes */\n/* eslint-disable no-unused-vars */\n\nconst button = document.querySelector(\"button\");\nconst textP = document.querySelector(\"p\");\nbutton.addEventListener(\"click\", () => {\n  const text = textP.textContent;\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(text).then(result => {\n      console.log(result);\n    }).catch(error => console.log(error)); //this code only runs on the supported browsers\n  } else {\n    alert('Feature is not available, please copy manually !');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dFAiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dCIsInRleHRDb250ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxMTMvLi9zcmMvYXBwLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG5jb25zdCB0ZXh0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gdGV4dFAudGV4dENvbnRlbnQ7XG4gIGlmKG5hdmlnYXRvci5jbGlwYm9hcmQpe1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAud3JpdGVUZXh0KHRleHQpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7ICAgLy90aGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzdXBwb3J0ZWQgYnJvd3NlcnNcbiAgfVxuICBlbHNle1xuICAgIGFsZXJ0KCdGZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUsIHBsZWFzZSBjb3B5IG1hbnVhbGx5ICEnKTtcbiAgfVxuICBcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBRS9DLE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0FBR3pDRixNQUFNLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3JDLE1BQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDRyxXQUFXO0VBQzlCLElBQUdDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFDO0lBQ3JCRCxTQUFTLENBQUNDLFNBQVMsQ0FDbEJDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQ2ZLLElBQUksQ0FBRUMsTUFBTSxJQUFLO01BQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUVDLEtBQUssSUFBS0gsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRztFQUMzQyxDQUFDLE1BQ0c7SUFDRkMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDO0VBQzNEO0FBRUYsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;