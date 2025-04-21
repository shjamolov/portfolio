from django.urls import path
from .views import project_list

urlpatterns = [
    path('portfolio/', project_list, name='portfolio'),
]
