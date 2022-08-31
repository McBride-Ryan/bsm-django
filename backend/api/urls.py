from django.urls import path
from .views import NewsPostFeaturedView, NewsPostDetailView, NewsPostListView, NewsPostCategoryView

urlpatterns = [
    path('', NewsPostListView.as_view()),
    path('featured', NewsPostFeaturedView.as_view()),
    path('category', NewsPostCategoryView.as_view()),
    path('<slug>', NewsPostDetailView.as_view())
]