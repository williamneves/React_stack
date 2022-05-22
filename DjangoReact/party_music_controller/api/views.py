from .models import Room
from rest_framework import generics
from .serializers import RoomSerializer

# Create your views here.

# Show all rooms created ordered by creation date


class RoomView(generics.ListAPIView):
  #Query all rooms by creation date
  queryset = Room.objects.all().order_by('-created_at')
  serializer_class = RoomSerializer
