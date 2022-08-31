from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from api.models import NewsPost
from api.serializers import NewsPostSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = ['Routes']
    return Response(routes)

class NewsPostListView(ListAPIView):
    queryset = NewsPost.objects.order_by('-date_created')
    serializer_class = NewsPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class NewsPostDetailView(RetrieveAPIView):
    queryset = NewsPost.objects.order_by('-date_created')
    serializer_class = NewsPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class NewsPostFeaturedView(ListAPIView):
    queryset = NewsPost.objects.all().filter(featured=True)
    serializer_class = NewsPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class NewsPostCategoryView(APIView):
    serializer_class = NewsPostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = NewsPost.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = NewsPostSerializer(queryset, many=True)

        return Response(serializer.data)