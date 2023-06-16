from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from crispy_forms.helper import FormHelper


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










