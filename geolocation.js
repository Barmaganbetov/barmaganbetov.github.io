ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [42.316086,69.666779],
            zoom: 12,
			controls: []
        });
myMap.controls.add('zoomControl');
myMap.controls.add('geolocationControl', {
    scaleLine: false
});
    myMap.geoObjects
        .add(new ymaps.Placemark([42.36476, 69.494534], {
            balloonContent: 'АЭРОПОРТ ШЫМКЕНТ АО'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
		        .add(new ymaps.Placemark([42.356035, 69.734744], {
            balloonContent: 'Цемент завод'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
		
		        .add(new ymaps.Placemark([42.368374, 69.621478], {
            balloonContent: 'Дендропарк'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))		;
		
		
		 result.textContent = '';

  // куда скакать
  function clickGoto() {
myMap.geoObjects.removeAll();
    // город
    var city = this.getAttribute('data-goto'); 
	var title = this.getAttribute('data-title');// или this.getAttribute('title')
    result.textContent = title;
    var myGeocoder = ymaps.geocode(city);

    myGeocoder.then(
      function(res) {
        coords = res.geoObjects.get(0).geometry.getCoordinates();
        // переходим по координатам
        myMap.panTo(coords, {
          flying: 1
        });
        // добавляем маркер
        var placeMark = new ymaps.Placemark(coords, {
          balloonContent: title
        });
        myMap.geoObjects.add(placeMark);
      },
      function(err) {
        alert('Ошибка');
      }
    );
    return false;
  }

  // навешиваем обработчики
  var col = document.getElementsByClassName('goto');
  for (var i = 0, n = col.length; i < n; ++i) {
    col[i].onclick = clickGoto;
  }

}