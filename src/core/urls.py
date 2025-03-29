from django.contrib import admin
from django.urls import path, include

from a_profile.views import profile

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('a_profile.urls')),
]
