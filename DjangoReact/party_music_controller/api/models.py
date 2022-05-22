from venv import create
from django.db import models
import string
import random

# Create a function to generate a random unique code to be used as a unique identifier for a party
def random_room_code():
  # Define the size of the code
  length = 5
  
  # Genereate a random code and check if it is unique in the database
  while True:
    # Generate a random code
    code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
    
    # Check if the code is unique in the database
    if Room.objects.filter(code=code).count() == 0:
      # Return the code if it is unique
      return code
    

# Create your models here.
class Room(models.Model):
  code = models.CharField(max_length=8, unique=True, default='')
  host = models.CharField(max_length=50, unique=True)
  guest_can_pause = models.BooleanField(default=False, null=False)
  votes_to_skip = models.IntegerField(default=1, null=False)
  created_at = models.DateTimeField(auto_now_add=True)
