from django.shortcuts import render

def about(request):
    return render(request, 'main/about.html')

def portfolio(request):
    return render(request, 'main/portfolio.html')

def blog(request):
    return render(request, 'main/blog.html')
