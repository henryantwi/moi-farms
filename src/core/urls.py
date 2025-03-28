from django.contrib import admin
from django.urls import path

from a_profile.views import profile

urlpatterns = [
    path('admin/', admin.site.urls),
    path('profile/', profile, name="profile"),
]
