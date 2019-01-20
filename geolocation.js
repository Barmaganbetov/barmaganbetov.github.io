ymaps.ready(init);

function init() {
	var userCoodinates;
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [42.316086,69.666779],
            zoom: 12,
			controls: ['geolocationControl']
        });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
		userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
		alert(userCoodinates);
		
});

var multiRoute = new ymaps.multiRouter.MultiRoute({   
        // Точки маршрута.
        // Обязательное поле. 
        referencePoints: [
            ['userCoodinates'],
            [55.734876, 37.59308], // улица Льва Толстого.
        ]
    }, {
      // Автоматически устанавливать границы карты так,
      // чтобы маршрут был виден целиком.
      boundsAutoApply: true
});
		


}