<MOUNT>

componentDidMount()
- component render edildikten hemen sonra
- API istekleri, ilk çağrı

componentWillMount()
- component oluşturulmadan hemen önce
- bunun yerine constructor() kullanılabilir

componentWillUnmount()
- timerları geçersiz kılma, api isteklerini iptal etme
- destroy işlemleri

<UPDATE>

componentDidUpdate()
- güncelleme gerçekleştikten hemen sonra
- mevcut değeri önceki değerle kıyaslamak için

componentWillUpdate()
- yeni props veya state alındığında render edilmeden önce
- setState kullanılmaz, eğer props'a bağlı state 
güncellenecekse componentWillReceiveProps() metodu kullanılır

shouldComponentUpdate()
- performans iyileştirmesi için
- güncellemenin göz ardı edilmesi için 
- nextProps ile this.props‘u, nextState ile this.state'i
karşılaştırabilir ve bunun sonucunda false döndürebiliriz