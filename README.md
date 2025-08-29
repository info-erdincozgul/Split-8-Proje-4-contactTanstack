# Contact Yönetim Uygulaması
## Proje Hakkında
Bu proje, bir iletişim (contact) yönetim uygulamasıdır. Kullanıcılar, API'den alınan kişileri listeleyebilir, detaylarını görüntüleyebilir, yeni kişiler ekleyebilir ve mevcut kişileri silebilir. Uygulama, veri yönetimi için TanStack Query (eski adıyla React Query) kütüphanesini kullanır ve durum yönetimini sunucu tarafında (server state) etkin bir şekilde yönetir. Arayüz gezinimi React Router ile sağlanırken, backend API istekleri axios ve Mock Service Worker (MSW) kullanılarak taklit edilir.
## Başlıca Özellikler:
* Veri Yönetimi (TanStack Query): Uygulama, sunucu durumunu yönetmek için TanStack Query kullanır. Bu sayede veri çekme (useQuery), güncelleme ve silme (useMutation) işlemleri basitleştirilmiştir.
* API Etkileşimi (Axios ve MSW): Backend işlemleri, axios kütüphanesi ile gerçekleştirilirken, gerçek bir API yerine Mock Service Worker ile taklit edilen bir API kullanılır. Bu, uygulamanın backend'den bağımsız olarak geliştirilmesine olanak tanır. API fonksiyonları api.js dosyasında tanımlanmıştır.
* Sayfa Gezinimi (React Router): Uygulama içerisinde gezinim, React Router kullanılarak sağlanır.
    * '/': Ana sayfa.
    * '/contacts/new': Yeni kişi ekleme formu.
    * '/contacts/:contactId': Bir kişinin detaylarını görüntüleme sayfası.
* Kişi Yönetimi:
    * SideBar.jsx: API'den çekilen tüm kişileri listeler ve her bir kişi için navigasyon linkleri oluşturur. Veri çekme işlemi useFetchContacts hook'u ile yapılır.
    * Contact.jsx: Bir kişinin detaylarını gösterir. Kişiyi silme butonu da bu bileşendedir. Kişi verisi useFetchContactById hook'u ile çekilir. Silme işlemi useDeleteContact hook'u kullanılarak yapılır.
    * Form.jsx: Yeni kişi eklemek için bir form sağlar. Form, react-hook-form kütüphanesi ile yönetilir. Veri ekleme işlemi useCreateContact hook'u ile gerçekleştirilir.

Proje Yapısı
* src/:
    * App.jsx: Uygulamanın ana bileşeni; QueryClientProvider ile TanStack Query ve React Router yönlendirme mantığını içerir.
    * api.js: Backend isteklerini yöneten axios fonksiyonları bulunur.
    * mocks/: Mock Service Worker kurulum dosyalarıdır. handlers.js sahte API endpointlerini tanımlar.
        * data.js: Mock API için örnek veri setini içerir.
    * components/: Uygulamanın farklı bölümlerini oluşturan React bileşenleri yer alır.
    * services/tanStack.js: TanStack Query hook'ları bu dosyada merkezi olarak tanımlanmıştır.
## Nasıl Çalıştırılır?
Bu projeyi yerel ortamınızda çalıştırmak için Node.js ve npm'in kurulu olması gerekir.
1. Gerekli Paketleri Yükleyin:
```
Bash
npm install
```
2. Uygulamayı Başlatın:
```
Bash
npm run dev
```
3. Tarayıcıda Görüntüleyin: Komut çalıştıktan sonra, projeniz genellikle http://localhost:5173/ adresinde otomatik olarak açılır.
## Kazanımlar
Bu projeyi inceleyerek veya üzerinde çalışarak aşağıdaki konularda deneyim kazanabilirsiniz:
* Sunucu Durum Yönetimi (TanStack Query): Geleneksel durum yönetimi yerine, veri çekme, önbelleğe alma ve mutasyon işlemleri için TanStack Query gibi modern bir kütüphaneyi nasıl kullanacağınızı öğrenirsiniz.
* React Router: Çok sayfalı bir React uygulamasında yönlendirme işlemlerini nasıl yöneteceğinizi öğrenirsiniz.
* API Entegrasyonu (Axios & MSW): Gerçek bir backend'e ihtiyaç duymadan Mock Service Worker ile API isteklerini nasıl taklit edeceğinizi ve axios ile bu isteklere nasıl yanıt vereceğinizi anlarsınız.
* Form Yönetimi (React Hook Form): react-hook-form kütüphanesi ile form durumunu ve validasyonları daha etkili bir şekilde nasıl yöneteceğinizi öğrenirsiniz.
* Modüler Kod Yapısı: API fonksiyonlarını, TanStack Query hook'larını ve bileşenleri ayrı dosyalarda tutarak daha temiz ve yeniden kullanılabilir bir kod yapısı oluşturma pratiği kazanırsınız.