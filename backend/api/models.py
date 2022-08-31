from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Categories(models.TextChoices):
    NEWS = 'news'
    COLUMNS = 'columns'
    PODCASTS = 'podcasts'
    VIDEOS = 'videos'
    NEWSLETTERS = 'newsletters'


class NewsPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.NEWS)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = NewsPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = NewsPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = NewsPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except NewsPost.DoesNotExist:
                pass
        
        super(NewsPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title