ymaps.ready(init);

function init() {
	var userCoodinates;
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [42.316086,69.666779],
            zoom: 12,
			controls: ['routeButtonControl','geolocationControl', 'zoomControl']
        });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.        
		userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
	    var control = myMap.controls.get('routeButtonControl');

    // Откроем панель для построения маршрутов.
    control.state.set('expanded', true);
	control.routePanel.state.set({
	fromEnabled: false,
    from: userCoodinates,
    to: [42.36476, 69.494534],
    type: "auto"
});
		
});

}
