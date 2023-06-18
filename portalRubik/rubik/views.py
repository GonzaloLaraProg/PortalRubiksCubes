from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm
from crispy_forms.helper import FormHelper
from django.contrib.auth.models import User
from django.db import IntegrityError
from .forms import CustomUserChangeForm
from django.contrib import messages

# Create your views here.
def vista_index(request):
    return render(request, 'index.html')

def vista_Comunidad(request):
    return render(request, 'comunidad.html')

def vista_WCA(request):
    return render(request, 'wcaApi.html')

def vista_formulario_registro_usu(request):
    return render(request, 'formulario.html')

def vista_cubos(request):
    return render(request, 'cubos.html')

def vista_soluciones_cubos(request):
    return render(request, 'soluciones.html')

def vista_sugerencias(request):
    return render(request, 'sugerencias.html')

def user_list(request):
    search_term = request.GET.get('search', '')
    users = User.objects.filter(username__icontains=search_term)
    return render(request, 'user_list.html', {'users': users, 'search': search_term})

def user_create(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            try:
                user = form.save(commit=False)
                if request.POST.get('is_superuser') == 'on':
                    user.is_superuser = True
                    user.is_staff = True
                user.save()
                messages.success(request, "Usuario Creado exitosamente.")
                return redirect('list_users')
            except IntegrityError:
                form.add_error('username', 'El nombre de usuario ya está en uso.')
    else:
        form = UserCreationForm()

    return render(request, 'user_create.html', {'form': form})

def user_delete(request, user_id):
    user = User.objects.get(id=user_id)
    user.delete()
    messages.success(request, "Usuario eliminado exitosamente.")
    return redirect('list_users')


def user_update(request, user_id):
    user = get_object_or_404(User, id=user_id)

    if '/password/' in request.path:
        error = "No se pueden cambiar las contraseñas desde esta página."
        messages.error(request, error)
        return redirect('list_users')

    if request.method == 'POST':
        form = CustomUserChangeForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, "Usuario actualizado exitosamente.")
            return redirect('list_users')
    else:
        form = CustomUserChangeForm(instance=user)
    
    return render(request, 'update_user.html', {'form': form, 'user': user})

def registrar(request):
    if request.method == "POST":
        #CREAR USUARIO
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            #Entra usuario
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')

            user = authenticate(username=username,password=password)
            login(request,user)
            messages.success(request, "Te registraste exitosamente.")
            return redirect('index')
        else:
            return render(request,"register.html", {'form':form})

    else:
        form = UserCreationForm()
        return render(request,"register.html", {'form':form})

def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data = request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request,user)
            return redirect('index')
        else:
            return render(request,"login.html", {'form':form})
    else: 
        form = AuthenticationForm()
        return render(request,"login.html", {'form':form})
def logout_view(request):
    logout(request)
    return redirect('index')










