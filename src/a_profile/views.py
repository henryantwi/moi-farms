from django.shortcuts import render

# Create your views here.
def profile(request):
    return render(request, "profile.html")

def dashboard(request):
    return render(request, "dashboard.html")

def invest(request):
    return render(request, "invest.html")

def about(request):
    return render(request, "about.html")


def login_view(request):
    """Render the login page."""
    return render(request, "login.html")
