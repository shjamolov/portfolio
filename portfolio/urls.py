from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns  # BU MUHIM!
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),  # << BU MUHIM!
]

urlpatterns += i18n_patterns(
    path('admin-panelga-kirish-uchun-url/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('projects.urls')),
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)