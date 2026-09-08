/* FORGE service worker - web push only */
self.addEventListener('push', function(event){
  event.waitUntil(
    self.registration.showNotification('FORGE', {
      body: 'Rest over - next set when ready.',
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: 'forge-rest',
      renotify: true
    })
  );
});
self.addEventListener('notificationclick', function(event){
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(function(list){
      for (var i=0;i<list.length;i++){
        if ('focus' in list[i]) return list[i].focus();
      }
      return clients.openWindow('./');
    })
  );
});
