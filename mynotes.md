body'ye flex verip itemleri ortaladık. aynı şekilde kapsayıcı div'e de flex verdik.

.view içerisinde resimlerimizin pozisyonunu borderlarını ve transitionunu belirttik. flex 0.5 ile resimlerin seçili olmadığı zamanki boyutunu ayarladık. buraya daha sonra geleceğiz.

.view h3'ü absolute verdik ve tam olarak yerini ayarladık. sabit olacağı için absolute vermek durumundayız.

.view.current ile seçili olan resimin gerçek pozisyonunu belirledik.

.view.current h3 ile seçili olan textin opacitysini ve transitionunu belirledik.


querSelectorAll ile "view" class'ının altındaki tüm elementleri seçtik ve bir değişkene atadık.

bu değişkeni forEach ile döngüye sokarak her bir element için addEventListener ile click event'i ekledik.

eventListener tıkladığımızda bir fonksiyon çalışacak. daha sonra da değişkenin classList'ine "current" clasını ekleyecek.

fonksiyonumuzu şimdi tanımlıyoruz:
removeActiveClasses() 
    değişken'i forEach'e al ve classList'inde "current" var ise sil