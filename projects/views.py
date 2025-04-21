from django.shortcuts import render
from .models import Project

def project_list(request):
    projects = Project.objects.all().order_by('-created_at')
    categories = set(projects.values_list('category', flat=True))
    return render(request, 'main/portfolio.html', {
        'projects': projects,
        'categories': categories
    })

