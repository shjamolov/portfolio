from django.db import models

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('web', 'Web Development'),
        ('clone', 'Clone Projects'),
        ('mini', 'Mini Projects'),
        ('ai', 'AI/ML Projects'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='media/upload_images/')
    github_link = models.URLField(blank=True, null=True)
    live_demo_link = models.URLField(blank=True, null=True)
    technologies = models.CharField(max_length=255)  # Masalan: "Python, Django, HTML"
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
