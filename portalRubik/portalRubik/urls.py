"""
URL configuration for portalRubik project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rubik import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.vista_index, name='index'),
    path('comunidad/', views.vista_Comunidad, name='comunidad'),
    path('wca/', views.vista_WCA, name='wcaApi'),
    # path('registroUser/', views.vista_formulario_registro_usu, name='formulario'),
    path('cubos/', views.vista_cubos, name='cubos'),
    path('soluciones-cubos/', views.vista_soluciones_cubos, name='soluciones'),
    # path('sugerencias/', views.vista_sugerencias, name='sugerencias'),
    path('user/signup/', views.registrar, name='register'),
    path('user/login', views.login_view, name='login'),
    path('user/logout', views.logout_view, name='logout'),

    path('superuser/create-users', views.user_create, name='create_users'),
    path('superuser/list-users', views.user_list, name='list_users'),
     path('superuser/<int:user_id>/delete/', views.user_delete, name='user_delete'),
     path('superuser/update/<int:user_id>/', views.user_update, name='update_user'),
    # path('superuser/update-users', views.user_update, name='update_users'),


    
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)